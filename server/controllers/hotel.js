import hotel from '../models/hotel.js'; 
import room from '../models/room.js'; 

//CREATE A NEW HOTEL
export const createHotel = async (req, res) => {
    const newHotel = new hotel(req.body); 

    try {
        const savedHotel = await newHotel.save(); 
        res.status(200).json(savedHotel);
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};

//UPDATE AN EXISTING HOTEL
export const updateHotel = async (req, res) => {

    try {
        const updatedHotel = await hotel.findByIdAndUpdate(req.params.id,
            {$set: req.body}, 
            {new: true}            
            );
            res.status(200).json(updatedHotel);             
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};

//DELETE HOTEL
export const deleteHotel = async (req, res) => {
    try {
        await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel deleted.")
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}; 

//GET HOTEL
export const getHotels = async (req, res) => {
    const { min, max, ...others} = req.query;
    try {
        const hotels = await hotel.find({
            ...others,
            cheapestPrice: {$gt: min | 1, $lt: max || 999}, }).limit(req.query.limit);
            res.status(200).json(hotels);
        }catch (error) {
            return res.status(500).json({message:error.message})
    }   
};

//LIST BY PLANET
export const countByCity = async (req, res, next) => {
    const planets = req.query.planets.split(",");
    try {
      const list = await Promise.all(
        planets.map((planet) => {
          return hotel.countDocuments({ planet: planet });
        })
      );
      res.status(200).json(list);
    } catch (error) {
      return res.status(500).json({message:error.message})
    }
  };

//COUNT BY TYPE

//GET HOTEL ROOMS