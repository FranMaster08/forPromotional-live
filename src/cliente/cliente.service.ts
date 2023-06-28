import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  getAllClientes() {
    return this.clienteRepository.find();
  }

  getClienteById(id: string) {
    return this.clienteRepository.findOne({ where: { idCliente : id}});
  }

  createCliente(createClienteDto: CreateClienteDto) {
    const cliente = this.clienteRepository.create();
    return this.clienteRepository.save(cliente);
  }

  async updateCliente(id: string, updateClienteDto: CreateClienteDto) {
    const cliente = await this.clienteRepository.findOne({ where: { idCliente : id}});
    if (!cliente) {
      throw new Error('Cliente not found');
    }
    const updatedCliente = Object.assign(cliente, updateClienteDto);
    return this.clienteRepository.save(updatedCliente);
  }

  async deleteCliente(id: string) {
    const cliente = await this.clienteRepository.findOne({ where: { idCliente : id}});
    if (!cliente) {
      throw new Error('Cliente not found');
    }
    return this.clienteRepository.remove(cliente);
  }
}
