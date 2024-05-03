import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const DashboardCard = ({text,count}) => {
    return ( 
        <Card className="flex-1">
           <CardContent className="p-5 space-y-2">
                <CardTitle className="text-3xl font-medium">{count}</CardTitle>
                <CardDescription className="text-xl text-slate-700">{text}</CardDescription>
           </CardContent>
        </Card>
     );
}
 
export default DashboardCard;