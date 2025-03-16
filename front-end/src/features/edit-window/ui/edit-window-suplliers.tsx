import { EditWindowSuplliersComponent } from "./styles";
// TODO: Перенести в features/update-suppliers/ui/edit-window-suplliers.tsx
interface EditWindowSuplliersProps {
    isOpen: boolean;
    onClose: () => void;
    item: any;
}
export const EditWindowSuplliers = ({ isOpen, onClose, item }: EditWindowSuplliersProps) => {
    return (
        <EditWindowSuplliersComponent isOpen={isOpen} onRequestClose={onClose} style={{
            overlay: { background: "rgba(29, 30, 33, 0.3)", zIndex: 1000 }
        }}>
            <h1>Edit Window Suplliers</h1>
        </EditWindowSuplliersComponent>
    );
};
