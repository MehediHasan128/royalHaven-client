import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { SyntheticEvent, useState } from "react";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMoreIcon sx={{ fontSize: "1.7rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(180deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const QuestionAccordion = ({
  panel,
  question,
  answer,
}: {
  panel: string;
  question: string;
  answer: string;
}) => {
  const [expanded, setExpanded] = useState<string | false>("1");

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion expanded={expanded === panel} onChange={handleChange(panel)}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6" component="span">
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="text-justify">
            <Typography variant="subtitle1">
              <span className="font-medium text-gray-700">{answer}</span>
            </Typography>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default QuestionAccordion;
