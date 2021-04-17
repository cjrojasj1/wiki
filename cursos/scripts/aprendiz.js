export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILLERATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSTGRADO"] = "Postgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, nivelEducativo, cursos) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.nivelEducativo = nivelEducativo;
        this.cursos = cursos;
    }
    Aprendiz.prototype.darCursosCertificados = function () {
        var total = 0;
        for (var i = 0; i < this.cursos.length; i++) {
            var curso = this.cursos[i];
            if (curso.certificado) {
                total++;
            }
        }
        return total;
    };
    return Aprendiz;
}());
export { Aprendiz };
