/** Props for the pattern components. */
export interface IPatternComponentProps {
    /** Identifier for the pattern. */
    patternId: string;

    /** Width of each individual cell in pixels. */
    width: number;

    /** Height of each individual cell in pixels. */
    height: number;

    /** Background color. */
    backgroundColor: string;

    /** Line color. */
    lineColor: string;
}