import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  getAllClientes() {
    return this.clienteService.getAllClientes();
  }

  @Get(':id')
  getClienteById(@Param('id') id: string) {
    return this.clienteService.getClienteById(id);
  }

  @Post()
  createCliente(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.createCliente(createClienteDto);
  }

  @Put(':id')
  updateCliente(@Param('id') id: string, @Body() updateClienteDto: CreateClienteDto) {
    return this.clienteService.updateCliente(id, updateClienteDto);
  }

  @Delete(':id')
  deleteCliente(@Param('id') id: string) {
    return this.clienteService.deleteCliente(id);
  }
}
