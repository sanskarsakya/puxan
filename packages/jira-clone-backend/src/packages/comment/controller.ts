import { Request, Response, Router } from 'express';
import { catchErrors } from '../../utilities/api/catchErrors';
import * as fromUseCases from './use-cases';

const router: Router = Router();

/**
 * QUERY
 * @param req
 * @param res
 * @returns
 */
const query = catchErrors(async (req: Request, res: Response): Promise<any> => {
  const response = await fromUseCases.query(req.query);

  return res.status(200).json(response);
});

/**
 * CREATE
 * @param req
 * @param res
 * @returns
 */
const create = catchErrors(
  async (req: Request, res: Response): Promise<any> => {
    const response = await fromUseCases.create(req.body);
    return res.status(201).json(response);
  }
);
/**
 * UPDATE
 * @param req
 * @param res
 * @returns
 */
const update = catchErrors(
  async (req: Request, res: Response): Promise<any> => {
    const response = await fromUseCases.update(req.body);
    return res.status(200).json(response);
  }
);

/**
 * REMOVE
 * @param req
 * @param res
 * @returns
 */
const remove = catchErrors(
  async (req: Request, res: Response): Promise<any> => {
    const response = await fromUseCases.remove(req.params.id);

    return res.status(200).json(response);
  }
);

router.get('/', query);
router.post('/', create);
router.put('/', update);
router.delete('/:id', remove);

export default router;
