class Actor {
    constructor(fname, lname, birthday, image, IMBDLink) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.image = image;
        this.IMBDLink = IMBDLink;
    }
    age() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.birthday + 1;
        return age;
    }
}

export default Actor;