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

    constructor(ownerName,ownerMail,name,description,maxPeople,minimumAge,beginDay,endDay,beginTime,endTime,place,targetAudience) {
        this.ownerName = ownerName
        this.ownerMail = ownerMail
        this.name = name
        this.description = description
        this.maxPeople = maxPeople
        this.minimumAge = minimumAge
        this.beginDay = beginDay
        this.endDay = endDay
        this.beginTime = beginTime
        this.endTime = endTime
        this.place = place
        this.targetAudience = targetAudience
    }

}