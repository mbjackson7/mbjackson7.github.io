import React from "react";
import URCA from "../assets/MattaURCA.png";
import AoC from "../assets/AdventOfCodeLogo.png";
import oRDS from "../assets/ordsSurveyBuilder.png";
import Sudoku from "../assets/sudokuGame.png";
import StandardPage from "../components/wrappers/StandardPage";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <StandardPage>
      <div className="p-5 overflow-x-hidden">
        <h1 className="">Projects</h1>
        <div className="w-full flex flex-row flex-wrap gap-5 p-5 overflow-x-hidden">
          <ProjectCard
            title="o-RDS"
            src={oRDS}
            url="https://github.com/o-RDS"
          >
            Open-source Respondent Driven Sampling, Senior Project with React and Express.js
          </ProjectCard>

          <ProjectCard
            title="Dr. George Survey App"
            src={URCA}
            url="https://github.com/MattaURCA-S22/MicrAgg-WebApp"
          >
            A React webapp for Dr. Jayashree George's research on microaggressions
          </ProjectCard>

          <ProjectCard
            title="Advent of Code"
            src={AoC}
            url="https://github.com/mbjackson7/adventOfCode"
          >
            My solution for the annual coding challenge Advent of Code
          </ProjectCard>

          <ProjectCard
            title="Sudoku"
            src={Sudoku}
            url="https://github.com/mbjackson7/sudoku"
          >
            Sudoku game, generator, and solver made in Python
          </ProjectCard>

          <ProjectCard
            title="Portfolio"
            src="data:image/png;base64,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C1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1AMY9bIZbkAxTBmjVyWC1DLN8asEcxyAWr5wpg1glkuQC0uwOJ+MGaNYJYLUAtTbiCY5QLUwpQbCGa5ALUwZe0HwSwXoBbGrPUO1AWohTFrPwlmuQClTN8HcgFqmf4s0AWohSk3EExzAUphyg0E01yAUpiy1vss0AUo5fiVgG8k01yASphyA8E8F6ASptxAMM8FKOR4F8AF+NS+MmWtf5wuQCFMuYFgBxegjuPnAC7Ap8aQG76S7OAClJH4EbB7F8AFKIQht5Ds4QJU8Z0htxDt4QJUwYxbvhPt4QLMddrtefxOgKE7ABdgspEfxFOYcRPRLi7AXNsYRu6ID31MuG3gOYALMNvbIE64E8g8AAzdAbgAk32MovttGQcyzwD++ZdwHxdgLoYxdnesJLaANoQ7uQBzMYy5jwMcsm3wP3QB5mIab6ZVgOMdINzLBZiLaXyYUoGfHOzA6P/lAszFOH752vtJrZ3c4//wHYALMBnj+MNrPw6mnv9thu9sXIC5mMeDsedn7zjCMfL9XIC5mMezsd3B7Lf/Kx1zAeZiIHtf+z+ywcoMlgxwAeZiIKGvPfcDPeMfeDPwf1yAuZiI9CP1tODnv8RzXnm66QLMxUia/m3fE3zrm/6GhUNcgLkYScKX4Kb/9uX4sx97L83QBZiLmVzptf1GF2AuhnIl/udBLsBcDOVCL242uwBzMZXrvDpAF2AuxnKZl9975ALMxVyu8voLzi7AXAzmIq/P3wWYjMlcY8L8XYDJGM0lZszfBZiM2VxhyvxdgMkYzgXmzN8FmIzpnG/WZ09cgLkYz+mmfQDRBZiL+ZyN/20CF2AuBnSuSQ//71yAubreyTVo6ufPXYDZRt7S0WPmt//GBZjv1ApM/djxxgU4QfbjXP1m/+IBF+Asp9wLvPARI8kFOEv3e3uPTH7whwtwnm8z7wbO+O5/4wKcKvXLfRLmP/b/4gKc7fvL9wP9Hyvs4AJc4Gf+Y757U7d99lyAiwyV4NTv/Q8uwJW+dbSg67PE41yA630/qsGPa2b/zgW4z7cvX778sVuwfXXh4H9xARbnAizOBVicC7A4F2BxLsDiXIDFuQCLcwEW5wIszgVYnAuwOBdgcS7A4lyAxbkAi3MBFucCLM4FWJwLsDgXYHEuwOJcgMW5AItzARbnAizOBVicC7A4F2BxLsDiXICl/e9//wcgvT12O0E9sQAAAABJRU5ErkJggg=="
            url="https://github.com/mbjackson7/mbjackson7.github.io"
          >
            You're looking at it! (Click for the repo)
          </ProjectCard>
        </div>
      </div>
    </StandardPage>
  );
}
