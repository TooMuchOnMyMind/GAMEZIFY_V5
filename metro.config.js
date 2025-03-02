import { getDefaultConfig } from "expo/metro-config";

const defaultConfig = getDefaultConfig(import.meta.url);

defaultConfig.resolver.sourceExts.push("web.js");

export default defaultConfig;
