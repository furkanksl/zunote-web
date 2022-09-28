import dynamic from "next/dynamic";

const NoteDetailPage = dynamic(async () => await import("../src/pages/note-detail/NoteDetailPage"), { ssr: false });

const NoteDetail = () => <NoteDetailPage />;

export default NoteDetail;
