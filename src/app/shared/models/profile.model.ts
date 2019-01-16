export class Profile {
    image: string;
    name: string;
    title: string;
    description: string;
    skills: SkillGroup[];
}

export class SkillGroup {
    name: string;
    skills: Skill[];
}

export class Skill {
    name: string;
    score: number;
}
