class AppointmentController {
  static async getAppointments(req, res) {
    const { date_gte, date_lte, _sort } = req.query;
    res
      .json([
        {
          id: 1,
          date: "2021-11-07",
          time: "14:20",
          desc: "aulafoda",
          calendarId: 1,
        },
        {
          id: 1,
          date: "2021-11-12",
          desc: "aulafoda asdasfhjioashfuiaohsfoaishfoaisfhaoshfoia",
          calendarId: 1,
        },
        {
          id: 1,
          date: "2021-11-21",
          time: "14:20",
          desc: "aulafoda",
          calendarId: 2,
        },
        {
          id: 1,
          date: "2021-11-27",
          desc: "aulafoda",
          calendarId: 2,
        },
      ])
      .status(200);
  }
  static async createAppointment() {}
  static async updateAppointment() {}
  static async deleteAppointment() {}
}

export { AppointmentController };
