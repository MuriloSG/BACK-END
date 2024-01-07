import { Request, Response, response } from "express";
import ListServicesService from "../services/ListServicesService";
import ShowServicesService from "../services/ShowServicesService";
import CreateServicesService from "../services/CreateServicesService";
import UpdateServicesService from "../services/UpdateServicesService";
import DeleteServicesService from "../services/DeleteServicesService";

export default class ServiceController {

  public async index(request: Request, response: Response): Promise<Response> {

    const listService = new ListServicesService();
    const service = await listService.execute();

    return response.json(service);
  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const showServices = new ShowServicesService();
    const service = await showServices.execute({ id });

    return response.json(service);
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { name, description, price, duration, status } = request.body;

    const createServices = new CreateServicesService();
    const service = await createServices.execute({ name, description, price, duration, status });

    return response.json(service);
  }

  public async update(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;
    const { name, description, price, duration, status } = request.body;

    const updatServices = new UpdateServicesService();
    const service = await updatServices.execute({ id, name, description, price, duration, status });

    return response.json(service);
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const deleteServices = new DeleteServicesService();
    const service = await deleteServices.execute({ id });

    return response.json([]);
  }
}
