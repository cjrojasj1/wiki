import {Curso} from './curso.js'

export enum NivelEducativo {
    BACHILLERATO = "Bachillerato",
    UNIVERSITARIO = "Universitario",
    POSTGRADO = "Postgrado"
}

export class Aprendiz {


    constructor(public nombres:string, public apellidos:string, public avatar: string, public edad: number, public nivelEducativo: NivelEducativo, public cursos: Curso[]) {

    }

    public darCursosCertificados():number {
        let total:number = 0;

        for(let i = 0; i < this.cursos.length; i++) {
            let curso: Curso = this.cursos[i];

            if (curso.certificado)
            {
                total++;
            }

        }
        return total;
    }
}