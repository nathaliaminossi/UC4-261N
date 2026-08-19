"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Party = void 0;
class Party {
    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
    getName() {
        return this.name;
    }
    getMembers() {
        return this.members;
    }
    addMember(member) {
        this.members.push(member);
    }
    removeMember(member) {
        const index = this.members.indexOf(member);
        if (index !== -1) {
            this.members.splice(index, 1);
        }
    }
    showMembers() {
        // party
        console.log(this.name);
        for (const member of this.members) {
            console.log(`${member.getName()} - Level ${member.getLevel()}`);
        }
    }
}
exports.Party = Party;
