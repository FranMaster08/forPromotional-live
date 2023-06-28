import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('clientes')
@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'Obtiene todos los clientes' })
  getAllClientes() {
    return this.clienteService.getAllClientes();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Obtiene un cliente por su ID' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  getClienteById(@Param('id') id: string) {
    return this.clienteService.getClienteById(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'Crea un nuevo cliente' })
  createCliente(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.createCliente(createClienteDto);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Actualiza un cliente existente' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  updateCliente(@Param('id') id: string, @Body() updateClienteDto: CreateClienteDto) {
    return this.clienteService.updateCliente(id, updateClienteDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Elimina un cliente' })
  @ApiResponse({ status: 404, description: 'Cliente no encontrado' })
  deleteCliente(@Param('id') id: string) {
    return this.clienteService.deleteCliente(id);
  }
}
