import prismaClient from "../../prisma";

interface NewScheduleRequest {
  user_id: string,
  haircut_id: string,
  customer: string
}

class NewSheduleService {
  async execute({ user_id, haircut_id, customer }: NewScheduleRequest) {
    if (customer === '' || haircut_id === '') {
      throw new Error('Error schedule new service.');
    }

    const shedule = await prismaClient.service.create({
      data: {
        customer,
        haircut_id,
        user_id
      }

    });
    return shedule;
  }
}

export { NewSheduleService }