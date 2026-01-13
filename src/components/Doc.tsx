import { FileIcon } from 'lucide-react'
import DialogComponet from './DialogComponet'
import { useDoc } from '@/store/docStore'

function Doc() {
  const {generarDoc} = useDoc()
  return (
    <DialogComponet
      title="Generar Documento"
      description="Desea generar el documento?"
      icon={<FileIcon />}
      textButton='Generar Documento'
      ok="GENERAR"
      close="Cancelar"
      okOnClick={generarDoc}
    />
  )
}

export default Doc
