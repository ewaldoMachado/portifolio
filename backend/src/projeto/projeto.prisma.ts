import { Injectable } from '@nestjs/common';
import { Projeto } from '@core';
import { PrismaProvider } from 'src/db/prisma.provider';
// import { Tecnologia } from '@core'

@Injectable()
export class ProjetoPrisma {
    constructor(private readonly prisma: PrismaProvider){}

    async obterTodas(): Promise<Projeto[]>{
        return this.prisma.projeto.findMany() as any
    }

    async obterPorId(id: number): Promise<Projeto | null>{
        return this.prisma.projeto.findMany({
            where:{ id },
            include: { tecnologias: true },
        }) as any
    }
}
