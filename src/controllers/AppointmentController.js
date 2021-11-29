import { Appointment } from "../models/AppointmentModel.js";

class AppointmentController {
  static async getAppointments(req, res) {
    const { date_gte, date_lte, _sort } = req.query;
    try {
      const appts = await Appointment.findAll({
        attributes: ["id", "date", "time", "desc", "calendarId"],
      });
      res.json(appts).status(200);
    } catch (error) {
      res.send(err).status(500);
    }
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
