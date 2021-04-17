import {Aprendiz, NivelEducativo} from './aprendiz.js'
import {Curso} from './curso.js'

let cursos = [new Curso("Curso 1",20,90,true,2020),
new Curso("Curso 2",20,99,true,2019),
new Curso("Curso 3",25,50,false,2018),
new Curso("Curso 4",30,90,false,2021),];

export const ap = new Aprendiz("Clayderman", "Rojas", "avatar.png", 38, NivelEducativo.POSTGRADO, cursos);

console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticaTable: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;

btnFiltro.onclick = () => {
    let text:string = textoBusqueda.value;
    text = (text==null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(c => c.nombre.match(text));
    mostrarCursosAprendiz(cursosFiltrados);

};

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);

function mostrarDatosAprendiz(aprendiz: Aprendiz):void {
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan="2"><img src="./${aprendiz.avatar}" height="100"/></td></tr>
    <tr><td>Nombres:</td><td>${aprendiz.nombres}</td></tr>
    <tr><td>Apellidos:</td><td>${aprendiz.apellidos}</td></tr>
    <tr><td>Nivel educativo:</td><td>${aprendiz.nivelEducativo}</td></tr>
    <tr><td>Edad:</td><td>${aprendiz.edad}</td></tr>
    `;
    aprendizTable.appendChild(tbodyAprendiz);

}

function mostrarEstadisticas(aprendiz: Aprendiz):void {
    let nCertificados = aprendiz.darCursosCertificados();
    let trElement = document.createElement("tr");

    trElement.innerHTML = `<td><b>Cursos certificados</b></td>
    <td>${nCertificados}</td>
    `;
    estadisticaTable.appendChild(trElement);

}

function mostrarCursosAprendiz(cursos: Curso[]):void {
    let tbodyCursos = document.createElement("tbody");
    let estado:string[] = cursos.map(c=>(c.calificacion > 60 ? 'green': 'red'));
    let index:number = 0;
    for(let curso of cursos) {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td style="color:${estado[index]}">${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>
        `;
        tbodyCursos.appendChild(trElement);
        index++;
    }
    cursosTable.appendChild(tbodyCursos);
}