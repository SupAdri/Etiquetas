import { useDoc } from "@/store/docStore";
import { useForm } from "react-hook-form";

const departamentos = [
  'Cuerpo de Guardia',
  'Central de Esterilización',
  'MNT',
  'Podología',
  'Estomatología',
  'Patología B.',
  'Patología M.',
  'Angiología',
  'Consultorios M.',
  'Vacunación',
  'Campo Visual',
  'Ultrasonido',
  'Rayos X',
  'Laboratorio',
  'Laboratorio de Citodiagnóstico',
  'Consultas'
]

const medicamentos = [
  'Alcohol 76%',
  'Alcohol 90%',
  'Alcohol Natural',
  'Alcohol Absoluto',

  'Hipoclorito 1%',
  'Hipoclorito 2.5%',
  'Hipoclorito 5%',
  'Hipoclorito 0.5%',
  'Hipoclorito 0.05%',
  'Hipoclorito 0.0053%',

  'Clorhexidina 0.05%',

  'Ácido acético 6%',
  'Ácido acético 2%',
  'Formol 10%'
]


export default function EtiquetaForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const {setEtiqueta} = useDoc()

  return (
    <form id="addEtiqueta" onSubmit={handleSubmit((data) => setEtiqueta(data))}>
      {/* Departamento */}
      <div className="flex flex-col">
        <label className="font-bold">Departamento</label>
        <select className="border-2 border-neutral-300 rounded-sm" {...register("departamento", { required: true })}>
          <option value="">Seleccione...</option>
          {departamentos.map((departamento) => (<option value={departamento}>{departamento}</option>))}
        </select>
        {errors.medicamento && <span className="text-red-500">Seleccione un departamento</span>}
      </div>

      {/* Selección de medicamento */}
      <div className="flex flex-col">
        <label className="font-bold">Selección de medicamento</label>
        <select className="border-2 border-neutral-300 rounded-sm" {...register("name", { required: true })}>
          <option value="">Seleccione...</option>
          {medicamentos.map((medicamento)=>(<option value={medicamento}>{medicamento}</option>))}
        </select>
        {errors.medicamento && <span className="text-red-500">Seleccione un medicamento</span>}
      </div>

      {/* Cantidad de etiquetas diarias */}
      <div className="flex flex-col">
        <label className="font-bold">Cuántas etiquetas diarias</label>
        <input
          className="border-2 border-neutral-300 rounded-sm"
          type="number"
          {...register("cantidad", { required: true, min: 1 })}
        />
        {errors.etiquetas && <span className="text-red-500">Ingrese un número válido</span>}
      </div>

      {/* Días */}
      <div className="flex flex-col">
        <label className="font-bold">Qué días</label>
        <select className="border-2 border-neutral-300 rounded-sm" {...register("dias", { required: true })}>
          <option value="">Seleccione...</option>
          <option value="l-j">Lunes a jueves</option>
          <option value="l-v">Lunes a viernes</option>
          <option value="l-d">Lunes a domingo</option>
          <option value="l,m,v">Lunes, miércoles y viernes</option>
        </select>
        {errors.dias && <span className="text-red-500">Seleccione una opción</span>}
      </div>

      {/* Fecha */}
      <div className="flex flex-col">
        <label className="font-bold">Fecha</label>
        <input
          className="border-2 border-neutral-300 rounded-sm"
          type="date"
          {...register("fecha", { required: true })}
        />
        {errors.fecha && <span className="text-red-500">Seleccione una fecha</span>}
      </div>

      {/* Vencimiento */}
      <div className="flex flex-col">
        <label className="font-bold">Vencimiento</label>
        <div className="space-x-2">
          <label>
            <input
              type="radio"
              value="1"
              {...register("duracion", { required: true })}
            />
            24h
          </label>
          <label>
            <input
              type="radio"
              value="7"
              {...register("duracion", { required: true })}
            />
            7días
          </label>
          <label>
            <input
              type="radio"
              value="15"
              {...register("duracion", { required: true })}
            />
            15días
          </label>
        </div>
        {errors.vencimiento && <span className="text-red-500">Seleccione un vencimiento</span>}
      </div>

      {/* Lote*/}
      <div className="flex flex-col">
        <label className="font-bold">Lote</label>
        <input
          className="border-2 border-neutral-300 rounded-sm"
          type='text'
          {...register("lote", { required: true })}
        />
        {errors.fecha && <span className="text-red-500">Escriba un lote</span>}
      </div>
    </form>
  );
}
