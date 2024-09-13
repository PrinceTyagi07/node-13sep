const express = require('express');
const data = require('../data.json')

exports.getAllUsers = async  (req, res) => {
    try {
      
        await res.json(data)

    } catch (error) {
        console.log(error)
    }
}