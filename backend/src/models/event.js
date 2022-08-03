    /*ownerName: string
    ownerMail: string
    name: string
    description: string
    maxPeople: int
    minimumAge: int
    beginDay: Date
    endDay: Date
    beginTime: string
    endTime: string
    place: string
    targetAudience: string*/

class Event{

    constructor(obj) {
        /*ownerName,ownerMail,name,description,maxPeople,minimumAge,beginDay,endDay,beginTime,endTime,place,targetAudience*/
        obj = obj!=null?obj:{}
        this.ownerName = obj.ownerName
        this.ownerMail = obj.ownerMail
        this.name = obj.name
        this.description = obj.description
        this.maxPeople = obj.maxPeople
        this.minimumAge = obj.minimumAge
        this.beginDay = obj.beginDay
        this.endDay = obj.endDay
        this.beginTime = obj.beginTime
        this.endTime = obj.endTime
        this.place = obj.place
        this.targetAudience = obj.targetAudience
    }

}

module.exports = Event