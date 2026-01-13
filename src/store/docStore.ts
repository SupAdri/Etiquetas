import { GenerarDocx } from '@/services/docService'
import type { FieldValues } from 'react-hook-form'
import { create } from 'zustand'

export type Etiqueta = {
    departamento: string,
    name: string,
    cantidad: number,
    fecha: Date,
    lote: string,
    duracion: number,
    dias: 'l-v' | 'l-d' | 'l-j' | 'l,m,v'
}

type Doc = {
    etiquetas: Etiqueta[] | [],
    setEtiqueta: (etiqueta: FieldValues) => void
    deleteEtiqueta: (id: number) => void
    generarDoc: () => void
}

export const useDoc = create<Doc>((set, get) => ({
    etiquetas: [],
    setEtiqueta: (etiqueta) => {
        var e = [
            ...get().etiquetas
        ]
        e.push({
            departamento: etiqueta.departamento,
            name: etiqueta.name,
            cantidad: Number(etiqueta.cantidad),
            fecha: new Date(etiqueta.fecha),
            lote: etiqueta.lote,
            duracion: Number(etiqueta.duracion),
            dias: etiqueta.dias
        })
        set(() => ({
            etiquetas: e
        }))
        alert('Etiqueta agregada.')
    },
    deleteEtiqueta: (id) => {
        var e = [
            ...get().etiquetas
        ]
        e.splice(id, 1)
        set(() => ({
            etiquetas: e
        }))
    },
    generarDoc: () => GenerarDocx(get().etiquetas),
}))