import { configure } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import 'cheerio';

configure({ adapter: new Adapter() });
