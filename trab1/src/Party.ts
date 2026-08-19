import { Character } from "./Character";

export class Party {

    private name: string;
    private members: Character[];

    public constructor(name: string, members: Character[]) {
        this.name = name;
        this.members = members;
    }

    public getName(): string {
        return this.name;
    }

    public getMembers(): Character[] {
        return this.members;
    }

    public addMember(member: Character): void {
        this.members.push(member);
    }

    // procura verifica  remove
    public removeMember(member: Character): void {
        const index = this.members.indexOf(member);
        if (index !== -1) {
            this.members.splice(index, 1);
        }

    }

    public showMembers(): void {
        // party
        console.log(this.name);

        for (const member of this.members) {
            console.log(`${member.getName()} - Level ${member.getLevel()}`);
        }

    }

}