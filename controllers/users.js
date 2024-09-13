const express = require('express');
const data = require('../data.json')

exports.getAllUsers = async (req, res) => {
    try {

        await res.json(data)

    } catch (error) {
        console.log(error)
    }
}
exports.getuser = async (req, res) => {
    try {
        let id = await parseInt(req.params.id);
        let user =  data.find((user) => user.id === id);
        await res.json(user)
    } catch (error) {
        console.log(error)
    }
}