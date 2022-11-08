import express from "express";

const router = express.Router(); 

//CREATE
router.post('/', createHotel); 

//UPDATE
router.patch('/:id', updateHotel)

//DELETE
router.delete("/:id", deleteHotel)

//GET
router.get('/:id', getHotel)

//GET ALL
router.get('/', getHotels)

export default router; 