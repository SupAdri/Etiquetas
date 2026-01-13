import { PlusIcon } from "lucide-react";
import DialogComponet from "./DialogComponet";
import EtiquetaForm from "./EtiquetaForm";
import { useDoc } from "@/store/docStore";
import EtiquetaComponet from "./EtiquetaComponet";

export default function Content() {
    const { etiquetas } = useDoc()
    console.log(etiquetas)
    return (
        <div className="space-y-2 flex flex-col items-center">
            <div className="p-8 bg-neutral-100 rounded-2xl space-y-2">
                {/* Aca van a ir las etiquetas */}
                {
                    etiquetas.length ?
                        etiquetas?.map((item,i) => (<EtiquetaComponet id={i} etiq={item} />))
                        :
                        <div>No hay etiquetas. Agrege una etiqueta para generar el documento.</div>
                }
            </div>
            <DialogComponet
                title="Agregar Etiqueta"
                description="Rellene los campos para agregar una etiqueta al documento."
                icon={<PlusIcon />}
                textButton="Agregar Etiqueta"
                form="addEtiqueta"
                ok="Agregar"
                close="Cerrar"
            >
                <EtiquetaForm />
            </DialogComponet>
        </div>
    )
}