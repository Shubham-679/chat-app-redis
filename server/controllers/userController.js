import { Router } from 'express'
import { EntityId } from 'redis-om'

import { userRepository as repository } from '../repository/user.js';

export const userRouter = Router();

userRouter.put('/:id', async (req, res) => {

  const user = await repository.save(req.params.id, req.body)

  // return the id of the song we just saved
  // res.send({ id: song[EntityId] })
  res.send(user)

})

userRouter.get('/:id', async (req, res) => {
  // fetch the song and return it
  const user = await repository.fetch(req.params.id)
  res.send(user);
})

userRouter.delete('/:id', async (req, res) => {

  // delete the song with its id
  await repository.remove(req.params.id)

  // respond with OK
  res.type('application/json')
  res.send('"OK"')

})

userRouter.post('/', async (req, res) => {

  // save the song using a generated id
  const user = await repository.save(req.body);
  // return the id of the song we just saved
  res.send(user)

})

userRouter.get('/', async (req, res) => {
  const users = await repository.search().returnAll();
  const modifiedUsers = users.map(user => { return {  _id: user[EntityId], ...user } });
  res.send(modifiedUsers);
})
