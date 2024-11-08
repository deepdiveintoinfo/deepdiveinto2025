import {
  CircleUser,
  Menu,
  Package2,
  Search,
} from "lucide-react"

import {
  Button,

  Card,
  CardContent,
  CardDescription,
  CardTitle,

  ChartContainer,

  ChartTooltip,

  ChartTooltipContent,

  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,

  Input,

  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ThirdParty/ShadCn"

import { ChartConfig } from "@/components/ThirdParty/ShadCn/Chart/component"
import {
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart as RechartsRadialBarChart,
  RadarChart as RechartRadarChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
 } from "recharts"
import { PageComponentType, DataVizItemType } from "@/lib/types"

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

import db from '@/lib/data-router/charts.json' with { type: 'json'}

const imageOrChart = (row: DataVizItemType) => {
  switch (row.title) {
    case "Donut Chart":
      return <DonutChart />
      break;
      case "Radial Bar Chart":
        return <RadialBarChart />
        break;
      case "Radial Line Graph":
        return <RadarChart />
        break;
      default:
      return <img src={row.image} />
      break;
  }
}

export const DataVizProjectPage: PageComponentType = () => (
  <div className="flex min-h-screen w-full flex-col">
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <a
          href="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </a>
        <a
          href="#"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Orders
        </a>
        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Products
        </a>
        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Customers
        </a>
        <a
          href="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Analytics
        </a>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <a
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </a>
            <a href="#" className="hover:text-foreground">
              Dashboard
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </a>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-2">

        {db.map((row: DataVizItemType, idx: number) => <Card key={idx}>
          <CardTitle className="px-2 py-3">{row.title}</CardTitle>
          {imageOrChart(row as DataVizItemType)}
          <CardDescription>
            <p className="px-2 py-3" dangerouslySetInnerHTML={{__html: row.description ? row.description[0] : '' }} />
          </CardDescription>
        </Card>)}
      </div>
      <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-1">
        
      </div>
    </main>
  </div>
)


DataVizProjectPage.path = "datavizproject"


const DonutChart = () => (
    <ChartContainer
    config={chartConfig}
    className="mx-auto aspect-square max-h-[250px]"
  >
    <PieChart>
      <ChartTooltip
        cursor={false}
        content={<ChartTooltipContent hideLabel />}
      />
      <Pie
        data={chartData}
        dataKey="visitors"
        nameKey="browser"
        innerRadius={60}
      />
    </PieChart>
  </ChartContainer>
)

const RadialBarChart = () => (
  <ChartContainer
  config={chartConfig}
  className="mx-auto aspect-square max-h-[250px]"
>
  <RechartsRadialBarChart data={chartData} innerRadius={30} outerRadius={110}>
    <ChartTooltip
      cursor={false}
      content={<ChartTooltipContent hideLabel nameKey="browser" />}
    />
    <RadialBar dataKey="visitors" background />
  </RechartsRadialBarChart>
</ChartContainer>

)

const radarChartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 273 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]
const radarChartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig


const RadarChart = () => <CardContent className="pb-0">
<ChartContainer
  config={radarChartConfig}
  className="mx-auto aspect-square max-h-[250px]"
>
  <RechartRadarChart data={radarChartData}>
    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
    <PolarAngleAxis dataKey="month" />
    <PolarGrid />
    <Radar
      dataKey="desktop"
      fill="var(--color-desktop)"
      fillOpacity={0.6}
    />
  </RechartRadarChart>
</ChartContainer>
</CardContent>
