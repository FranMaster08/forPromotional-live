import { IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ example: '1', description: 'ID del cliente' })
  @IsNotEmpty()
  idCliente: string;

  @ApiProperty({ example: '1', description: 'ID del vendedor' })
  @IsOptional()
  idVendedor: string;

  @ApiProperty({ example: 'John Doe', description: 'Nombre del cliente' })
  @IsOptional()
  nombre: string | null;

  @ApiProperty({ example: 'ABCD1234', description: 'RFC del cliente' })
  @IsOptional()
  rfc: string | null;

  @ApiProperty({ example: 'Calle 123', description: 'Dirección del cliente' })
  @IsOptional()
  direccion: string | null;

  @ApiProperty({ example: 'Centro', description: 'Colonia del cliente' })
  @IsOptional()
  colonia: string | null;

  @ApiProperty({ example: '12345', description: 'Código postal del cliente' })
  @IsOptional()
  codigoPostal: string | null;

  @ApiProperty({
    example: 'Ciudad de México',
    description: 'Ciudad del cliente',
  })
  @IsOptional()
  ciudad: string | null;

  @ApiProperty({
    example: 'Estado de México',
    description: 'Estado del cliente',
  })
  @IsOptional()
  estado: string | null;

  @ApiProperty({ example: 'México', description: 'País del cliente' })
  @IsOptional()
  pais: string | null;

  @ApiProperty({ example: '555-123-4567', description: 'Teléfono del cliente' })
  @IsOptional()
  telefono: string | null;

  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'Email del cliente',
  })
  @IsOptional()
  email: string | null;

  @ApiProperty({
    example: 'Alguna observación',
    description: 'Observaciones adicionales',
  })
  @IsOptional()
  observaciones: string | null;

  @ApiProperty({ example: 100.5, description: 'Saldo del cliente' })
  @IsOptional()
  saldo: number | null;

  @ApiProperty({ example: 5000, description: 'Límite de crédito del cliente' })
  @IsOptional()
  limiteCredito: number | null;

  @ApiProperty({
    example: '2023-06-28T10:00:00Z',
    description: 'Fecha de creación del cliente',
  })
  @IsOptional()
  fechaCreacion: Date | null;

  @ApiProperty({
    example: '2023-06-28T15:30:00Z',
    description: 'Fecha de modificación del cliente',
  })
  @IsOptional()
  fechaModificacion: Date | null;

  @ApiProperty({
    example: true,
    description: 'Indica si el cliente está activo',
  })
  @IsOptional()
  activo: boolean | null;

  @ApiProperty({
    example: false,
    description: 'Indica si el cliente ha sido eliminado',
  })
  @IsOptional()
  eliminado: boolean | null;
}
