import { toast } from "sonner";
import "./App.css";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Toaster } from "./components/ui/sonner";
import { Textarea } from "./components/ui/textarea";
import { cn } from "./lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { Popover, PopoverContent } from "./components/ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";

import { Carrot, CarrotIcon } from "lucide-react";

function App() {
  const isActive = true;
  return (
    <div className="p-5">
      <Carrot className="h-10 w-10 fill-orange-500" />
      <AlertDialog>
        <AlertDialogTrigger>Alert Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <div>body</div>
          <AlertDialogAction
            onClick={() => {
              console.log("Action!");
            }}
          >
            Continue
          </AlertDialogAction>
          <AlertDialogCancel
            onClick={() => {
              console.log("Cancel!");
            }}
          >
            Cancel
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          <div>body</div>
        </DialogContent>
      </Dialog>

      <Popover>
        <PopoverTrigger asChild>
          <Button>Open</Button>
        </PopoverTrigger>
        <PopoverContent>Content!</PopoverContent>
      </Popover>

      <Carousel className="mx-10">
        <CarouselContent>
          <CarouselItem className="basis-1/3">1</CarouselItem>
          <CarouselItem className="basis-1/3">2</CarouselItem>
          <CarouselItem className="basis-1/3">3</CarouselItem>
          <CarouselItem className="basis-1/3">4</CarouselItem>
          <CarouselItem className="basis-1/3">5</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Toaster />
      <Textarea />

      <Input placeholder="입력..." />

      <Button
        onClick={() => {
          toast("토스트 메세지", {
            position: "top-center",
          });
        }}
      >
        버튼!
      </Button>
      <Button variant={"destructive"}>버튼</Button>
      <Button variant={"ghost"}>버튼</Button>
      <Button variant={"link"}>버튼</Button>
      <Button variant={"outline"}>버튼</Button>
      <Button variant={"secondary"}>버튼</Button>

      <div className={cn(isActive ? "text-green-500" : "text-red-500")}>
        isActive
      </div>
      <div className="text-primary">Primary</div>
      <div className="text-muted">Muted</div>
      <div className="text-destructive">Destructive</div>
    </div>
  );
}

export default App;
