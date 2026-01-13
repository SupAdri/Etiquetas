import type { Etiqueta } from "@/store/docStore";
import { Document, Packer, Paragraph, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from "file-saver";

export async function GenerarDocx(etiq: Etiqueta[]) {

    const agrupado = etiq.reduce((acc, etiqueta) => {
        if (!acc[etiqueta.departamento]) {
            acc[etiqueta.departamento] = [];
        }
        acc[etiqueta.departamento].push(etiqueta);
        return acc;
    }, {} as Record<string, Etiqueta[]>);

    const sections = [
        {
            properties: {
                page: {
                    size: { orientation: "landscape" }, // horizontal
                },
            },
            children: Object.entries(agrupado).flatMap(([departamento, lista]) => {
                // Crear filas de la tabla
                const rows = [
                    ...lista.flatMap(etiqueta =>
                        // Repetir tantas veces como cantidad
                        Array.from({ length: etiqueta.cantidad }, () =>
                            new TableRow({
                                children: Array.from({ length: cantDeDias(etiqueta.dias) }, (_, i) =>
                                    new TableCell({
                                        width: { size: 2000, type: WidthType.DXA },
                                        children: [
                                            new Paragraph(` P.T. Lima   ${etiqueta.dias == "l,m,v" ?
                                                    new Date(etiqueta.fecha.getTime() + (1 + i*2) * 24 * 60 * 60 * 1000).toLocaleDateString()
                                                    :
                                                    new Date(etiqueta.fecha.getTime() + (1 + i) * 24 * 60 * 60 * 1000).toLocaleDateString()
                                                }`),
                                            new Paragraph(" " + etiqueta.name),
                                            new Paragraph(` L: ${etiqueta.lote}`),
                                            new Paragraph(` V: ${etiqueta.dias == "l,m,v" ?
                                                    new Date(etiqueta.fecha.getTime() + (1 + i*2+etiqueta.duracion) * 24 * 60 * 60 * 1000).toLocaleDateString()
                                                    :
                                                    new Date(etiqueta.fecha.getTime() + (1 + i+etiqueta.duracion) * 24 * 60 * 60 * 1000).toLocaleDateString()
                                                }`),
                                        ]
                                    }),
                                )
                            })
                        )
                    )
                ];

                // Retornar título + tabla en el mismo children
                return [
                    new Paragraph({ text: departamento }),
                    new Table({ rows }),
                ];
            })
        }
    ];

    const doc = new Document({ sections });
    const blob = await Packer.toBlob(doc);
    saveAs(blob, `Etiquetas ${new Date().toLocaleDateString()}.docx`);
    alert("Documento creado exitosamente.")

    function cantDeDias(dias: string) {
        var x = 0
        if (dias == 'l-v') {
            x = 5
        }
        if (dias == 'l-d') {
            x = 7
        }
        if (dias == 'l-j') {
            x = 4
        }
        if (dias == 'l,m,v') {
            x = 3
        }
        return x
    }
}