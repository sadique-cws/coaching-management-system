import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";

const ConfirmModal = ({children, onConfirm}) => {
    return ( 
        <AlertDialog >
            <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
                <AlertDialogHeader>
                        <AlertDialogTitle>Are you Sure?</AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    This Action connot be undone. 
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction onClick={onConfirm} class="bg-black text-white px-3">
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
     );
}
 
export default ConfirmModal;