const express=require('express')
const router=express.Router()

const{getCharacterId,getDetailId,getFav,postFav,deleteFav}=require('../controllers/index.js')

router.get('/character/:id',getCharacterId)
router.get('/detail/:detailId',getDetailId)
router.get('/fav',getFav)
router.post('/fav',postFav)
router.delete('/fav/:id',deleteFav)



module.exports= router