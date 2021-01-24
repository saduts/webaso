"use strict";
exports.__esModule = true;
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, funcao, dataNascimento, dataAdmissao, cpf, rg, ctps, setor, cargo) {
        this._nome = nome;
        this._funcao = funcao;
        this._dataNascismento = dataNascimento;
        this._dataAdmissao = dataAdmissao;
        this._cpf = cpf;
        this._rg = rg;
        this._ctps = ctps;
        this._setor = setor;
        this._cargo = cargo;
    }
    Object.defineProperty(Funcionario.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "funcao", {
        get: function () {
            return this._funcao;
        },
        set: function (dataNascismento) {
            this._funcao = dataNascismento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "dataNascismento", {
        get: function () {
            return this._dataNascismento;
        },
        set: function (dataNascismento) {
            this._dataNascismento = dataNascismento;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "dataAdmissao", {
        get: function () {
            return this._dataAdmissao;
        },
        set: function (dataAdmissao) {
            this._dataAdmissao = dataAdmissao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "cpf", {
        get: function () {
            return this._cpf;
        },
        set: function (cpf) {
            this._cpf = cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "rg", {
        get: function () {
            return this._rg;
        },
        set: function (rg) {
            this._rg = rg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "ctps", {
        get: function () {
            return this._ctps;
        },
        set: function (ctps) {
            this._ctps = ctps;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "setor", {
        get: function () {
            return this._setor;
        },
        set: function (setor) {
            this._setor = setor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Funcionario.prototype, "cargo", {
        get: function () {
            return this._cargo;
        },
        set: function (cargo) {
            this._cargo = cargo;
        },
        enumerable: false,
        configurable: true
    });
    return Funcionario;
}());
exports["default"] = Funcionario;
