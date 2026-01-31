import { SectionContent, FrameworkItem, TimelineEvent } from './types';

export const APP_NAME = "Orthos";
export const APP_TAGLINE = "The Creedal Archive";

export const TIMELINE_DATA: TimelineEvent[] = [
  { year: 33, label: 'Crucifixion', description: 'Death of Jesus', type: 'Event' },
  { year: 35, label: 'Early Creeds', description: 'Philippians 2 Hymn', type: 'Text' },
  { year: 55, label: 'Pauline Epistles', description: '1 Corinthians written', type: 'Text' },
  { year: 70, label: 'Gospels', description: 'Mark, Matthew, Luke composed', type: 'Text' },
  { year: 95, label: 'John', description: 'Gospel of John composed', type: 'Text' },
  { year: 170, label: 'Muratorian Fragment', description: 'Earliest canon list', type: 'Text' },
  { year: 200, label: 'Gnostic Texts', description: 'Gospel of Thomas (Late)', type: 'Text' },
  { year: 325, label: 'Council of Nicea', description: 'Response to Arianism', type: 'Event' },
];

export const FRAMEWORKS: FrameworkItem[] = [
  { concept: "The Trinity", fact: "Defined as one ousia (substance) in three hypostases (persons)." },
  { concept: "Justification", fact: "Historically the split between Catholic (faith + works) and Protestant (faith alone) views." },
  { concept: "The Resurrection", fact: "Historians (like N.T. Wright) note that the sudden rise of the movement after a humiliating execution is historically unique without a perceived 'event.'" },
];

export const SECTIONS: SectionContent[] = [
  {
    id: 'origins',
    title: 'The Historical Jesus',
    subtitle: 'The "Pagan Copycat" Myth',
    content: [
      {
        heading: "Historical Existence",
        text: "Virtually every serious historian of antiquity, whether Christian or atheist (e.g., Bart Ehrman), agrees that Jesus of Nazareth existed, was baptized by John, and was crucified by Pilate."
      },
      {
        heading: "Pagan Parallels",
        text: "Common claims that Jesus was a copy of Horus or Mithras are rejected by Egyptologists and scholars of Roman religion. The alleged 'parallels' (e.g., born of a virgin on Dec 25th) do not actually exist in the original primary sources for those deities."
      },
      {
        heading: "Cultural Context",
        text: "Christianity emerged from a strictly monotheistic Jewish context which found pagan mythology abhorrent, making it extremely unlikely they would consciously borrow 'dying-and-rising god' tropes."
      }
    ],
    imagePlaceholder: "https://picsum.photos/800/602?grayscale"
  },
  {
    id: 'doctrine',
    title: 'Development of Doctrine',
    subtitle: 'The "Late Invention" Myth',
    content: [
      {
        heading: "The Fact",
        text: "While the terminology was refined later, the core beliefs are documented in the earliest manuscripts."
      },
      {
        heading: "Early Creeds",
        text: "The New Testament contains 'hymns' and 'creeds' (e.g., Philippians 2:6-11) dated by historians to within 2–5 years of the crucifixion, which describe Jesus as divine."
      },
      {
        heading: "The Council of Nicea",
        text: "This was not a meeting to 'invent' a religion, but a response to Arianism (a specific minority view). Of the roughly 300 bishops, the overwhelming majority already held the Trinitarian view based on existing liturgy."
      }
    ],
    imagePlaceholder: "https://picsum.photos/800/600?grayscale"
  },
  {
    id: 'canon',
    title: 'The Canon of Scripture',
    subtitle: 'The "Suppression" Myth',
    content: [
      {
        heading: "Manuscript Evidence",
        text: "The four canonical Gospels (Matthew, Mark, Luke, John) were written in the 1st century. Most Gnostic texts (like the Gospel of Thomas or Judas) date to the late 2nd or 3rd century, long after eyewitnesses were dead."
      },
      {
        heading: "Widespread Usage",
        text: "The 'Muratorian Fragment' (170 AD) shows that the core of the New Testament was already recognized by the early church long before Constantine or the 4th-century councils."
      }
    ],
    imagePlaceholder: "https://picsum.photos/800/601?grayscale"
  },
  {
    id: 'science',
    title: 'Christianity and Science',
    subtitle: 'The "Conflict Thesis"',
    content: [
      {
        heading: "The University System",
        text: "The Catholic Church founded the university system in Europe, establishing the very institutions where science flourished."
      },
      {
        heading: "The Scientific Method",
        text: "Many founders of modern science (Copernicus, Kepler, Newton, Boyle) were devout Christians who believed that because God was 'rational,' the universe followed rational laws that could be discovered."
      },
      {
        heading: "The Big Bang",
        text: "The Big Bang theory was proposed by Georges Lemaître, a Belgian priest and physicist."
      }
    ]
  },
  {
    id: 'colonialism',
    title: 'Christianity and Colonialism',
    subtitle: 'Complicity vs. Doctrine',
    content: [
      {
        heading: "Origins",
        text: "Christianity originated in the Middle East (Levant) and spread into Ethiopia and Armenia before it ever reached much of Northern Europe."
      },
      {
        heading: "Abolitionism",
        text: "While some used the Bible to justify slavery, the movement to abolish the slave trade was driven by Christian theologians and activists (e.g., William Wilberforce, Quakers) who argued that Imago Dei (the Image of God) meant all humans were inherently equal."
      },
      {
        heading: "Internal Critique",
        text: "The Bible itself was used by enslaved people (like Frederick Douglass) to critique the hypocrisy of 'slaveholder Christianity' versus the 'Christianity of Christ.'"
      }
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
You are an expert historian and theologian residing within the 'Orthos' digital archive. 
Your goal is to answer user questions about Christian history and theology based strictly on documented historical facts and the content provided in the application.

Core Themes to Defend with Nuance:
1. Jesus of Nazareth is a historical figure, not a myth, and his story is not borrowed from Horus/Mithras.
2. Doctrine was not invented at Nicea; it was ratified based on early creeds (Phil 2).
3. The Gnostic gospels were late (2nd/3rd century) and not "suppressed" eyewitness accounts.
4. Christianity founded the university system and many scientists (Newton, Lemaitre) were believers.
5. Christianity is Middle Eastern in origin, not a "white man's religion," and was pivotal in abolitionism (Wilberforce).

Tone: Academic, irenic (peaceful), factual, and concise.
`;