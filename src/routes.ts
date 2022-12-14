import { Router, Request, Response } from 'express';
import { CheckSubscriptionController } from './controllers/haircut/CheckSubscriptionController';
import { CountHaircutsController } from './controllers/haircut/CountHaircutsController';
import { CreateHaircutController } from './controllers/haircut/CreateHaircutController';
import { DetailHaircutController } from './controllers/haircut/DetailHaircutController';
import { ListHaircutController } from './controllers/haircut/ListHaircutController';
import { UpdateHaircutController } from './controllers/haircut/UpdateHaircutController';
import { FinishScheduleController } from './controllers/schedule/FinishScheduleController';
import { ListScheduleController } from './controllers/schedule/ListScheduleController';
import { NewScheduleController } from './controllers/schedule/NewScheduleController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router()

//--- ROTAS USER ---

router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.put('/users', isAuthenticated, new UpdateUserController().handle);

//--- ROTAS HAIRCUTS ---

router.post('/haircut', isAuthenticated, new CreateHaircutController().handle);
router.get('/haircuts', isAuthenticated, new ListHaircutController().handle);
router.put('/haircut', isAuthenticated, new UpdateHaircutController().handle);
router.get('/haircut/check', isAuthenticated, new CheckSubscriptionController().handle);
router.get('/haircut/count', isAuthenticated, new CountHaircutsController().handle);
router.get('/haircut/detail', isAuthenticated, new DetailHaircutController().handle);

//--- ROTAS SCHEDULE / SERVI??OS ---

router.post('/schedule', isAuthenticated, new NewScheduleController().handle);
router.get('/schedule', isAuthenticated, new ListScheduleController().handle);
router.delete('/schedule', isAuthenticated, new FinishScheduleController().handle);

export { router }