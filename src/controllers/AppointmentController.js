class AppointmentController {
  static async getAppointments(req, res) {
    const { date_gte, date_lte, _sort } = req.query;
    res.send('ok!').status(200);
  }
  static async createAppointment() {}
  static async updateAppointment() {}
  static async deleteAppointment() {}
}

export { AppointmentController };
