import Main from "@/components/Main";
import Section from "@/components/Section";
import Chart from "@/components/Chart"
import Work from "@/components/Work"
import HomePage from '@/components/ui/HomePage'
import Cta from "@/components/Cta";
import Free from "@/components/Free";
import Footer from'@/components/Footer';
export default function page() { 
  return (
    <div>
        <Main/>
        <Section/>
        <Chart/>
        <Work/>
        <div className="bg-[#F7F7F7]">
        <Cta/>
        <Free/>
        </div>
        <Footer/>
    </div>
  )
}
