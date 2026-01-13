import { Trash2Icon } from "lucide-react"
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card"
import { useDoc, type Etiqueta } from "@/store/docStore"
import DialogComponet from "./DialogComponet"

type Props = {
    id: number
    etiq: Etiqueta
}

function EtiquetaComponet({ etiq, id }: Props) {
    const { deleteEtiqueta } = useDoc()
    return (
        <Card className="p-4">
            <CardTitle>{etiq.departamento}</CardTitle>
            <CardContent className="m-2">
                <div>{etiq.name}</div>
                <div>Fecha: {etiq.fecha.toLocaleDateString("es-ES")}</div>
                <div>Dias: {etiq.dias}</div>
                <div>Lote: {etiq.lote}</div>
            </CardContent>
            <CardFooter>
                <DialogComponet
                    title="Eliminar Etiqueta"
                    description="Estas seguro de eliminar esta etiqueta?"
                    icon={<Trash2Icon />}
                    textButton='Eliminar etiqueta'
                    ok="ELIMINAR"
                    okVariant='destructive'
                    close="Cancelar"
                    okOnClick={() => deleteEtiqueta(id)}
                >
                    <Card className="p-8 font-bold border-2 bg-neutral-200">
                        <div>{etiq.departamento}</div>
                        <div>{etiq.name}</div>
                        <div>Fecha: {etiq.fecha.toLocaleDateString("es-ES")}</div>
                        <div>Lote: {etiq.lote}</div>
                    </Card>
                </DialogComponet>
            </CardFooter>
        </Card>
    )
}

export default EtiquetaComponet