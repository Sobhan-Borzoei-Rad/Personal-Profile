import SkillCard from "./SkillCard";

function Skills() {
    return (
        <>
            <ul>
                <SkillCard skillName='Html' />
                <SkillCard skillName='Css' />
                <SkillCard skillName='JavaScript' />
                <SkillCard skillName='React' />
                <SkillCard skillName='Flutter' />
                <SkillCard skillName='Dart' />
                <SkillCard skillName='Git & GitHub' />
            </ul>
        </>
    );
}

export default Skills;