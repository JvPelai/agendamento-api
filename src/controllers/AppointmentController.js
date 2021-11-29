import { Appointment } from "../models/AppointmentModel.js";

class AppointmentController {
  static async getAppointments(req, res) {
    const { date_gte, date_lte, _sort } = req.query;
    res
      .json([
        {
          id: 1,
          date: "2021-11-07",
          time: "14:20",
          desc: "aula",
          calendarId: 1,
        },
        {
          id: 1,
          date: "2021-11-12",
          desc: "aula asdasfhjioashfuiaohsfoaishfoaisfhaoshfoia",
          calendarId: 1,
        },
        {
          id: 1,
          date: "2021-11-21",
          time: "14:20",
          desc: "aula",
          calendarId: 2,
        },
        {
          id: 1,
          date: "2021-11-27",
          desc: "aula",
          calendarId: 2,
        },
      ])
      .status(200);
  }
  static async createAppointment(req, res) {
    try {
      const data = req.body;
      const newAppt = await Appointment.create(data);
      res.json(newAppt).status(200);
    } catch (err) {
      res.send(err).status(500);
    }
  }
  static async updateAppointment() {}
  static async deleteAppointment() {}
}

export { AppointmentController };
