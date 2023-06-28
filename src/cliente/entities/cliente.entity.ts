import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Index('clientes_pkey', ['idCliente'], { unique: true })
@Index('IX_clientes_id_cliente_pkey ', ['idCliente'], {})
@Entity('clientes', { schema: 'public' })
export class Cliente {
  @Column('character varying', {
    primary: true,
    name: 'id_cliente',
    length: 20,
  })
  idCliente: string;

  @Column('character varying', { name: 'id_vendedor', length: 10 })
  idVendedor: string;

  @Column('character varying', { name: 'nombre', nullable: true })
  nombre: string | null;

  @Column('character varying', { name: 'rfc', nullable: true, length: 20 })
  rfc: string | null;

  @Column('character varying', { name: 'calle', nullable: true })
  calle: string | null;

  @Column('character varying', { name: 'no_int', nullable: true })
  noInt: string | null;

  @Column('character varying', { name: 'no_ext', nullable: true })
  noExt: string | null;

  @Column('character varying', { name: 'municipio', nullable: true })
  municipio: string | null;

  @Column('character varying', { name: 'colonia', nullable: true })
  colonia: string | null;

  @Column('character varying', { name: 'codpos', nullable: true, length: 20 })
  codpos: string | null;

  @Column('integer', { name: 'precio', nullable: true, default: () => '1' })
  precio: number | null;

  @Column('numeric', {
    name: 'limitecredit',
    nullable: true,
    precision: 14,
    scale: 4,
    default: () => '0',
  })
  limitecredit: string | null;

  @Column('integer', {
    name: 'plazo_credito',
    nullable: true,
    default: () => '0',
  })
  plazoCredito: number | null;

  @Column('character varying', { name: 'contacto1', nullable: true })
  contacto1: string | null;

  @Column('character varying', {
    name: 'telefono1',
    nullable: true,
    length: 30,
  })
  telefono1: string | null;

  @Column('character varying', { name: 'email1', nullable: true })
  email1: string | null;

  @Column('character varying', {
    name: 'contacto2',
    nullable: true,
    length: 30,
  })
  contacto2: string | null;

  @Column('character varying', {
    name: 'telefono2',
    nullable: true,
    length: 30,
  })
  telefono2: string | null;

  @Column('character varying', { name: 'email2', nullable: true })
  email2: string | null;

  @Column('character varying', {
    name: 'contacto3',
    nullable: true,
    length: 30,
  })
  contacto3: string | null;

  @Column('character varying', {
    name: 'telefono3',
    nullable: true,
    length: 30,
  })
  telefono3: string | null;

  @Column('character varying', { name: 'email3', nullable: true })
  email3: string | null;

  @Column('character varying', { name: 'cont_cred', nullable: true })
  contCred: string | null;

  @Column('date', { name: 'fecha_alta', nullable: true })
  fechaAlta: string | null;

  @Column('integer', { name: 'serial', nullable: true })
  serial: number | null;

  @Column('character varying', { name: 'gln', nullable: true })
  gln: string | null;

  @Column('character varying', { name: 'noproveedor', nullable: true })
  noproveedor: string | null;

  @Column('character varying', { name: 'ctel', nullable: true })
  ctel: string | null;

  @Column('character varying', { name: 'eancte', nullable: true })
  eancte: string | null;

  @Column('numeric', {
    name: 'descuento1',
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => '0',
  })
  descuento1: string | null;

  @Column('numeric', {
    name: 'descuento2',
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => '0',
  })
  descuento2: string | null;

  @Column('numeric', {
    name: 'descuento3',
    nullable: true,
    precision: 10,
    scale: 2,
    default: () => '0',
  })
  descuento3: string | null;

  @Column('character varying', { name: 'transporte', nullable: true })
  transporte: string | null;

  @Column('character varying', { name: 'ctelev', nullable: true })
  ctelev: string | null;

  @Column('character', { name: 'tkmov', nullable: true, length: 1 })
  tkmov: string | null;

  @Column('integer', {
    name: 'id_plantilla',
    nullable: true,
    default: () => '0',
  })
  idPlantilla: number | null;

  @Column('numeric', {
    name: 'saldof',
    nullable: true,
    precision: 14,
    scale: 4,
    default: () => '0',
  })
  saldof: string | null;

  @Column('character', {
    name: 'autof',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  autof: string | null;

  @Column('numeric', {
    name: 'ext_limite',
    nullable: true,
    precision: 14,
    scale: 4,
    default: () => '0',
  })
  extLimite: string | null;

  @Column('character', {
    name: 'tipoc',
    nullable: true,
    length: 1,
    default: () => "'L'",
  })
  tipoc: string | null;

  @Column('character varying', { name: 'curp', nullable: true })
  curp: string | null;

  @Column('numeric', { name: 'desco', nullable: true, precision: 10, scale: 4 })
  desco: string | null;

  @Column('numeric', {
    name: 'porfac',
    nullable: true,
    precision: 14,
    scale: 4,
  })
  porfac: string | null;

  @Column('integer', { name: 'st_credito', nullable: true, default: () => '1' })
  stCredito: number | null;

  @Column('character varying', { name: 'cie', nullable: true })
  cie: string | null;

  @Column('integer', {
    name: 'id_empresa',
    nullable: true,
    default: () => '(-1)',
  })
  idEmpresa: number | null;

  @Column('character varying', { name: 'id_gpo', nullable: true, length: 10 })
  idGpo: string | null;

  @Column('character varying', {
    name: 'metodopago',
    nullable: true,
    default: () => "'NO IDENTIFICADO'",
  })
  metodopago: string | null;

  @Column('character varying', {
    name: 'numctapago',
    nullable: true,
    default: () => "'S/CT'",
  })
  numctapago: string | null;

  @Column('numeric', {
    name: 'decto1',
    nullable: true,
    precision: 14,
    scale: 4,
    default: () => '0.0000',
  })
  decto1: string | null;

  @Column('character varying', {
    name: 'id_sector',
    nullable: true,
    length: 10,
  })
  idSector: string | null;

  @Column('character varying', { name: 'status', nullable: true })
  status: string | null;

  @Column('character varying', {
    name: 'id_tipo_cte',
    nullable: true,
    length: 10,
  })
  idTipoCte: string | null;

  @Column('numeric', {
    name: 'descuento',
    nullable: true,
    precision: 5,
    scale: 2,
  })
  descuento: string | null;

  @Column('numeric', {
    name: 'desc_volumen',
    nullable: true,
    precision: 5,
    scale: 2,
  })
  descVolumen: string | null;

  @Column('character varying', {
    name: 'id_comprador',
    nullable: true,
    length: 10,
    default: () => "'000'",
  })
  idComprador: string | null;

  @Column('text', { name: 'notas', nullable: true })
  notas: string | null;

  @Column('character varying', { name: 'pag_web', nullable: true })
  pagWeb: string | null;

  @Column('character', {
    name: 'opccredito',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  opccredito: string | null;

  @Column('character varying', {
    name: 'id_uso',
    nullable: true,
    default: () => "'G01'",
  })
  idUso: string | null;

  @Column('character varying', {
    name: 'id_metpago',
    nullable: true,
    default: () => "'PPD'",
  })
  idMetpago: string | null;

  @Column('character varying', { name: 'nombre_comercial', nullable: true })
  nombreComercial: string | null;

  @Column('character varying', {
    name: 'id_asesor',
    nullable: true,
    length: 20,
    default: () => "'0000'",
  })
  idAsesor: string | null;

  @Column('character varying', { name: 'ofi_municipio', nullable: true })
  ofiMunicipio: string | null;

  @Column('character varying', { name: 'ofi_colonia', nullable: true })
  ofiColonia: string | null;

  @Column('character varying', {
    name: 'ofi_codpos',
    nullable: true,
    length: 20,
  })
  ofiCodpos: string | null;

  @Column('character varying', { name: 'ofi_calle', nullable: true })
  ofiCalle: string | null;

  @Column('integer', {
    name: 'plazo_credito_old',
    nullable: true,
    default: () => '0',
  })
  plazoCreditoOld: number | null;

  @Column('numeric', {
    name: 'monto_minimo_flete',
    nullable: true,
    precision: 14,
    scale: 4,
    default: () => '0',
  })
  montoMinimoFlete: string | null;

  @Column('character varying', { name: 'id_regimen', nullable: true })
  idRegimen: string | null;

  @Column('character varying', {
    name: 'act_datos',
    nullable: true,
    length: 2,
    default: () => "'N'",
  })
  actDatos: string | null;

  @Column('character varying', {
    name: 'act_pagweb',
    length: 2,
    default: () => "'N'",
  })
  actPagweb: string;

  @Column('timestamp without time zone', {
    name: 'fecha_datos',
    nullable: true,
  })
  fechaDatos: Date | null;
}
