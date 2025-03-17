import { ConfigurationPanel } from "@/components/configuration-panel";
import { LogoutAllDevicesButton } from "./logout-all-devices-button";
import { getScopedI18n } from "@/locales/server";

export default async function SecurityPage() {
  const t = await getScopedI18n('settings.security');
  return (
    <ConfigurationPanel title={t('sessions')}>
      <div className="flex flex-col gap-4">
        <p>
          {t('sessionsDescription')}
        </p>

        <div className="w-fit">
          <LogoutAllDevicesButton />
        </div>
      </div>
    </ConfigurationPanel>
  );
}
