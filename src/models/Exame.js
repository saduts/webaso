"use strict";
exports.__esModule = true;
var Exame = /** @class */ (function () {
    function Exame(id, nome, dataRealizacao, clinica, valor, responsavel) {
        this._id = id;
        this._nome = nome;
        this._dataRealizacao = dataRealizacao;
        this._clinica = clinica;
        this._valor = valor;
        this._responsavel = responsavel;
    }
    Object.defineProperty(Exame.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Exame.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Exame.prototype, "dataRealizacao", {
        get: function () {
            return this._dataRealizacao;
        },
        set: function (dataRealizacao) {
            this._dataRealizacao = dataRealizacao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Exame.prototype, "clinica", {
        get: function () {
            return this._clinica;
        },
        set: function (clinica) {
            this._clinica = clinica;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Exame.prototype, "valor", {
        get: function () {
            return this._valor;
        },
        set: function (valor) {
            this._valor = valor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Exame.prototype, "responsavel", {
        get: function () {
            return this._responsavel;
        },
        set: function (responsavel) {
            this._responsavel = responsavel;
        },
        enumerable: false,
        configurable: true
    });
    return Exame;
}());
exports["default"] = Exame;
