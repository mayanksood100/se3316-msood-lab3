const schedules = [];

class Schedule{
    constructor(name, subjectCode, courseCode){
        this.name = name;
        this.subjectCode = subjectCode;
        this.courseCode = courseCode;
    }

    save(){
        schedules.push(this);
    }

    static findAll(){
        return schedules;
    }

    static findByName(schedName) {
        return schedules.filter(s => s.name == schedName);
    }

    update() {
        const editScheduleIndex = schedules.findIndex(s => s.name == this.name);
        schedules[editScheduleIndex] = this;
    }

    static deleteByName(schedName) {
        const deleteScheduleIndex = schedules.findIndex(s => s.name == schedName);
        schedules.splice(deleteScheduleIndex, 1);
    }

    static deleteAll(){
        return schedules.splice(0,schedules.length);
    }

}

module.exports = Schedule;