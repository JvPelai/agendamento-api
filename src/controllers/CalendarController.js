class CalendarController {
  static async getCalendars(req, res) {
    res
      .json([
        { id: 1, name: "Pedagógico", color: "blue" },
        { id: 2, name: "Administrativo", color: "green" },
      ])
      .status(200);
  }
  static async createCalendar() {}
  static async updateCalendar() {}
  static async deleteCalendar() {}
}

export { CalendarController };
